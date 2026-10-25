import { MetadataRoute } from 'next';
import { store } from '@/lib/data/store';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://alkhalilpublishers.com';
  const books = store.getBooks();
  const categories = store.getCategories();

  const bookUrls: MetadataRoute.Sitemap = books.map((book) => ({
    url: `${baseUrl}/books/${book.id}`,
    lastModified: new Date(book.updated_at || book.created_at),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const categoryUrls: MetadataRoute.Sitemap = categories.map((cat) => ({
    url: `${baseUrl}/books?category=${cat.id}`,
    lastModified: new Date(cat.created_at),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/books`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    ...categoryUrls,
    ...bookUrls,
  ];
}
