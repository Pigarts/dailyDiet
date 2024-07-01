import { DietProgressIndicator } from "@components/dietProgressIndicator";
import { Container, FadeUp, OverlayContainer, Wrapper } from "./styles";
import { ActivityIndicator, SectionList, View } from "react-native";
import { Button } from "@components/button";
import { FoodCard } from "@components/foodCard";
import { useCallback, useEffect, useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { foodGetAll } from "@storage/food/getAll";
import { FoodStorageDTO } from "../../DTOS/foodStorageDTO";
import { foodDelete } from "@storage/food/delete";
import { HistoryByDate } from "src/DTOS/itensByDate";
import { Heading } from "@components/heading";
import { PageHeader } from "@components/pageHeader";

type GroupedData = {
    date: string;
    items: FoodStorageDTO[];
  };

export function Home() {
    const [percentage, setPercentage] = useState<number>(0);
    const [data, setData] = useState<FoodStorageDTO[]>([]);
    const [groupedData, setGroupedData] = useState<HistoryByDate[]>([]);

    const navigation = useNavigation();

    const handleStatsPage = () => {
        navigation.navigate("status");
    };

    const handleNewFood = () => {
        navigation.navigate("newFood");
    };

    const handleFoodDetails = async (item: FoodStorageDTO) => {
        if(item.type) {
            navigation.navigate("details", {time: item.time, type: item.type})

        }
    
    }
    ;

    const getPercentage = (data: FoodStorageDTO[]) => {
        if (data.length < 1) {
            return;
        }
    
        const totalItems = data.length;
        const healthyItems = data.filter(item => item.type === "GOOD").length;
        const healthyFoodsPercentage = Math.round((healthyItems / totalItems) * 100);
        setPercentage(healthyFoodsPercentage);
    }

    const groupByDate = (data: FoodStorageDTO[]): HistoryByDate[] => {
        const grouped: { [key: string]: FoodStorageDTO[] } = {};
    
        data.forEach(item => {
          const date = item.date;
          if (!grouped[date]) {
            grouped[date] = [];
          }
          grouped[date].push(item);
        });
    
        const formattedGroupedData: HistoryByDate[] = Object.keys(grouped).map(date => ({
          title: date,
          data: grouped[date],
        }));
    
        return formattedGroupedData;
      };
    
      const fetchData = useCallback(async () => {
        try {
          const data = await foodGetAll();
          setData(data);
          getPercentage(data);
          const grouped = groupByDate(data);
          setGroupedData(grouped);
        } catch (error) {
          console.log(error);
        }
      }, []);
    
    useFocusEffect(
        useCallback(() => {
            fetchData()
        
        }, [])
    );

    return (
        <Container>
            <PageHeader type="HOME"/>
            <DietProgressIndicator 
                number={percentage}
                onPress={handleStatsPage}
            />
            <Button
                title="Nova refeição"
                icon="PLUS"
                type="SOLID"
                label="Refeições"
                onPress={handleNewFood}
            />
            
            {
                data ?
                <Wrapper>
                    <SectionList
                        sections={groupedData}
                        renderItem={({item}) => (
                            <FoodCard
                                time={item.time}
                                title={item.name}
                                type={item.type === 'GOOD' ? 'GOOD' : 'BAD'}
                                onPress={() => handleFoodDetails(item)}
                            />
                        )}
                        renderSectionHeader={({section}) => (
                            <Heading title={section.title} />
                        )}
                        contentContainerStyle={{paddingBottom: 20}}
                    />
                </Wrapper>
                        : 
                        <View style={{flex: 1, justifyContent: "center", backgroundColor: "FAFAFA"}}>
                        <ActivityIndicator/>
                        </View>
            }
            <OverlayContainer>

            <FadeUp 
                source={require("@assets/gradient.png")}
                
                />
                </OverlayContainer>
        </Container>
    );
}