import { GetStaticPaths, GetStaticProps } from "next"
import { getSession, useSession } from "next-auth/react"
import { prismic } from "../../../services/prismic"
import { RichText } from "prismic-dom"
import Head from "next/head"

import styles from '../post.module.scss'
import Link from "next/link"
import { useEffect } from "react"
import { useRouter } from "next/router"

interface PostPreviewProps {
  post : {
    slug: string;
    title: string;
    content: string;
    updatedAt: string;
  }
}

export default function PostPreview({ post }: PostPreviewProps) {
  const { data: session } = useSession()  as any
  const router =  useRouter()

  useEffect(() => {
    if(session?.activeSubscription) {
      router.push(`/posts/${post.slug}`)
    }
  }, [session])

  return (
    <>
      <Head>
        <title>{post.title} | ig.news</title>
      </Head>

      <main className={styles.container}>
        <article className={styles.post}>
          <h1>{post.title}</h1>
          <time>{post.updatedAt}</time>
          <div className={`${styles.postContent} ${styles.previewContent}`} dangerouslySetInnerHTML={{ __html: post.content }} />

          <div className={styles.continueReading}>
            Wanna continue reading?
            <Link href="/">Subscribe now 🤗</Link>
          </div>
        </article>
      </main>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [
      // { params: { slug: 'python-entendendo-heranca-multipla-da-melhor-manei' } }
    ],
    fallback: 'blocking'
  }

}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params
  
  // console.log(session)

  const response = await prismic.getByUID('post', String(slug), {})

  const post = {
    slug,
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content.splice(0, 3)),
    updatedAt: new Date(response.last_publication_date).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })
  }

  return {
    props: {
      post
    },
    redirect: 60 * 30 // 30 minutes
  }

}