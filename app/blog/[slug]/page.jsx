import React, { Suspense } from 'react'
import styles from "./blogpost.module.css"
import Image from 'next/image'
import PostUser from '@/components/postUser/PostUser'
import { getPost } from '@/lib/data'

// FETCH DATA WITH AN API
const getData = async (slug) => {
    const res = await fetch(`http://localhost:3000/api/blog/${slug}`, { next: { revalidate: 3600 } });

    if (!res.ok) {
        throw new Error("Something went wrong");
    }

    return res.json();
};

const BlogPost = async ({ params }) => {

    const { slug } = params;

    // Fetch with API
    const post = await getData(slug)
    // Fetch without API
    // const post = await getPost(slug);

    return (
        <div className={styles.container}>
            {post.img && <div className={styles.imageContainer}>
                <Image src={post.img} alt="" fill className={styles.img} />
            </div>
            }
            <div className={styles.textContainer}>
                <h1 className={styles.title}>{post.title}</h1>
                <div className={styles.detail}>
                    {post && <Suspense fallback={<div>Loading...</div>}>
                        <PostUser userId={post.userId} />
                    </Suspense>
                    }

                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Published</span>
                        <span className={styles.detailValue}>01.01.2024</span>
                    </div>
                </div>
                <div className={styles.content}>{post.desc}</div>
            </div>
        </div>
    )
}

export default BlogPost;
