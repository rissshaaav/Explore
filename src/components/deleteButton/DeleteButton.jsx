'use client'
import React from "react";
import styles from "./deleteButton.module.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const DeleteButton = ({ postSlug, authorEmail }) => {
    const deletePost = async (slug) => {
        const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
            method: 'DELETE',
        });
        
    
        router.push("http://localhost:3000/")
    }

    const { status, data } = useSession();
    const router = useRouter();
    if(status === "authenticated" && authorEmail == data.user.email) {
        return(
            <button className={styles.button} onClick={() => deletePost(postSlug)}>Delete</button>
        )
    }

    return null;
}

export default DeleteButton;