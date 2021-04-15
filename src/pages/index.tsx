import { GetServerSideProps } from 'next';

import { Container, Title } from '../styles/pages/Home';

interface IProduct {
  id: string;
  title: string;
  image: string;
}

interface HomeProps {
  recommendedProducts: IProduct[];
}

export default function Home({ recommendedProducts }: HomeProps) {
  return (
    <Container>
      <section>
        <Title>Recommended Products</Title>

        <ul>
          {recommendedProducts.map(product => {
            return (
              <li key={product.id}>
                <img src={product.image} alt={product.title} />

                {product.title}
              </li>
            );
          })}
        </ul>
      </section>
    </Container>
  )
}


export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const response = await fetch('http://localhost:3333/recommended');
  const recommendedProducts = await response.json();

  return {
    props: {
      recommendedProducts
    }
  }
}