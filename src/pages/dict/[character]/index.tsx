import { useRouter } from "next/router";
import React from "react";
import NextLink from "next/link";

export const Character: React.FC = () => {
    const {query} = useRouter();

    return (
        <div>
            <div>
                {`Character ${JSON.stringify(query)}`}
            </div>
            <div>
                Links ssg: <NextLink href={"/lexikon/a"}>a</NextLink> - <NextLink href={"/lexikon/b"}>b</NextLink> - <NextLink href={"/lexikon/c"}>c</NextLink>
            </div>
            <div>
                Links not ssg: <NextLink href={"/lexikon/d"}>d</NextLink> - <NextLink href={"/lexikon/e"}>e</NextLink> - <NextLink href={"/lexikon/f"}>f</NextLink>
            </div>
        </div>
    );
};

export const getStaticPaths = async () => {
    const characters = ["a", "b", "c"];

    return {
        paths: characters.map(character => ({ params: { character }})),
        fallback: true,
    };
}

export const getStaticProps = async () => {
    return {
        props: {},
    };
}

export default Character;