import Cards from '../UI/Cards';
import style from './AvailableMeals.module.css'
import MealItem from './MealItem/MealItem';
const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    },
];

const AvalableMeals = () => {
    const mealList = DUMMY_MEALS.map(el => <MealItem key={el.id} id={el.id} name={el.name} price={el.price} desc={el.description} />)
    return (
        <section className={style.meals}>
            <Cards>
                <ul>
                    {mealList}
                </ul>
            </Cards>
        </section>
    );
}

export default AvalableMeals;
