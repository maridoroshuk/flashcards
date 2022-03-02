import { useRouter } from 'next/router'
import { getSession } from 'next/client'
import React from 'react'
import styles from './AuthForm.module.css'

function AuthForm({data}) {
    const router = useRouter;


  return (
    <div>{data}</div>
  )
}

export async function getServerSideProps(context) {
    const session = await getSession(context);
    return {
        props: {
            data: session ? "list" : "No list"
        }
    }

}
export default AuthForm