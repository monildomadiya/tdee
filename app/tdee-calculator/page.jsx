import React, { Suspense } from 'react';
import Component from './ClientComponent';
import { client } from '../../sanity/lib/client';
import { urlForImage } from '../../sanity/lib/image';

export const metadata = {
  title: 'TDEE Calculator – Free & Accurate Total Daily Energy Expenditure',
  description: 'Calculate your Total Daily Energy Expenditure (TDEE) instantly. Uses Mifflin-St Jeor & Katch-McArdle formulas. Get your BMR, BMI, and macro targets too. 100% free.',
  keywords: ['TDEE calculator', 'total daily energy expenditure', 'maintenance calories', 'calorie calculator free', 'BMR calculator'],
  alternates: { canonical: 'https://tdee.tech/tdee-calculator' },
  openGraph: {
    title: 'TDEE Calculator – Free & Accurate | TDEE.TECH',
    description: 'Find your exact maintenance calories, BMR, BMI, and macro targets. The most accurate free TDEE calculator online.',
    url: 'https://tdee.tech/tdee-calculator',
  },
};

export const revalidate = 60; // Revalidate at most every minute

async function getRecentPosts() {
  try {
    const query = `*[_type == "post"] | order(publishedAt desc)[0...3] {
      title,
      slug,
      shortDescription,
      publishedAt,
      "categoryName": category->title,
      featuredImage
    }`;
    const posts = await client.fetch(query);
    // Process image URLs on the server to avoid passing huge objects
    return posts.map(post => ({
      ...post,
      imageUrl: post.featuredImage ? urlForImage(post.featuredImage).url() : null
    }));
  } catch (error) {
    console.error("Error fetching recent posts:", error);
    return [];
  }
}

export default async function Page() {
  const recentPosts = await getRecentPosts();

  return (
    <Suspense fallback={null}>
      <Component recentPosts={recentPosts} />
    </Suspense>
  );
}