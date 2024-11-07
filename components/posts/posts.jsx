import Link from 'next/link'
import { formatDate, getBlogPosts } from '../../src/app/utils/blogs'
import styles from './posts.module.css'

export function BlogPosts() {
  const allBlogs = getBlogPosts()

  return (
    <div className={styles.container}>
      {allBlogs
        .sort((a, b) => new Date(b.metadata.publishedAt) - new Date(a.metadata.publishedAt))
        .map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <div className={styles.postLink}>
              <p className={styles.postDate}>
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              <h2 className={styles.postTitle}>
                {post.metadata.title}
              </h2>
              <p className={styles.postDescription}>
                {post.metadata.description}
              </p>
            </div>
          </Link>
        ))}
    </div>
  )
}

