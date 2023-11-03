import { Card, Title, Text } from '@tremor/react';
import Link from 'next/link';

export default async function IndexPage() {

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Surveys</Title>
      <Card className="mt-6">
        <Link href="/survey">Take Survey</Link>
      </Card>
    </main>
  );
}
