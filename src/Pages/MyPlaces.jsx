import Header from "../Components/Header/Header";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import "./MyPlaces.css";
import places from "../Components/Places.json";
import AttractionCard from "../Components/AttractionCard"; // Подключаем список всех мест

const MyPlaces = () => {
    const [favoritePlaces, setFavoritePlaces] = useState([]);

    useEffect(() => {
        const savedFavorites = Cookies.get("favorites");
        if (savedFavorites) {
            const favoriteIds = JSON.parse(savedFavorites).map(Number); // Преобразуем в массив чисел
            const filteredPlaces = places.filter(place => favoriteIds.includes(place.id));
            console.log("filteredPlaces:", filteredPlaces); // Проверяем, что фильтрация работает
            setFavoritePlaces(filteredPlaces);
        }
    }, []);

    console.log(favoritePlaces)

    return (
        <div className="Container">
            <div className="Wrapper">
                <Header />
                {favoritePlaces.length > 0 ? (
                    <div className="MyPlaces">
                        <h1 style={{ fontSize: "30px", fontWeight: 500}}>Вы выбрали следующие места</h1>
                        <div className="Grid">
                            {favoritePlaces.map((place, index) => (
                                <AttractionCard
                                    key={index}
                                    name={place.Name}
                                    descr={place.Descr}
                                    photo={place.Photo}
                                    id={place.id}
                                />
                            ))}
                        </div>
                        <div className="Travel">
                            <h1 style={{fontSize: "30px", fontWeight: 500}}>Готовы посетить их? Тогда скорее стройте
                                маршрут!</h1>
                            <button className="StyledButton">Маршрут</button>
                        </div>
                    </div>
                ) : (
                    <div className="MyPlaces">
                        <img src={"/store/Smiley.svg"} alt={"Smiley"} style={{padding: "103px 0 0 0"}} />
                        <div>
                            <h1 className="h1">У вас пока нет выбранных мест</h1>
                            <h1 className="h1">Начните их поиск <Link to={"/#attractions"} className="HeaderLink">здесь</Link></h1>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default React.memo(MyPlaces);
