import { ItemTable, OrderCard } from "../components";
import { HomeStyles } from "../styles";

const { HomeWrapper, HomeContainer } = HomeStyles;

const Home = () => {
  return (
    <HomeWrapper>
      <HomeContainer>
        <ItemTable
          title={"Shopping Cart"}
          headers={["test"]}
          items={[
            {
              id: 9090,
              name: "Item1",
              price: 200,
              discount: 10,
              type: "fiction",
              img_url: "https://place-hold.it/40.jpg",
            },
          ]}
        />
        <OrderCard />
      </HomeContainer>
    </HomeWrapper>
  );
};

export default Home;
