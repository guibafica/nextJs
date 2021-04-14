import { useEffect, useState } from 'react';

import { Container, Title } from '../styles/pages/Home';

interface IProduct {
  id: string;
  title: string;
  image: string;
}

export default function Home() {
  const [recommendedProducts, setRecommendedProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    fetch('http://localhost:3333/recommended').then(response => {
      response.json().then(data => {
        setRecommendedProducts(data);
      });
    });
  }, []);

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
