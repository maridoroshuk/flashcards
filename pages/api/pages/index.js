import { getSession } from "next-auth/react";
import FlashCardsList from "../../../components/flashcards/FlashCardsList";

export default async (req, res) => {
    const session = await getSession({get})

    if(session) {
        req.send({
            content: <FlashCardsList/>
        })
    } else {
        req.send(({
            content: "You need to be sign in"
        }))
    }
}