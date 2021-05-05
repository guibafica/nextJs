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
  async function handleSum() {
    const math = (await import('../lib/math')).default;

    alert(math.sum(30, 5));
  }

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

      <button onClick={handleSum}>Somar!</button>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/recommended`);
  const recommendedProducts = await response.json();

  return {
    props: {
      recommendedProducts
    }
  }
}
