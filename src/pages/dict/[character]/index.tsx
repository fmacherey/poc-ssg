import { useRouter } from "next/router";
import React from "react";
import NextLink from "next/link";

export const Character: React.FC = () => {
  const { query } = useRouter();

  return (
    <div>
      <div>{`Character ${JSON.stringify(query)}`}</div>
      <div>
        Links ssg:{" "}
        <NextLink href={"/dict/[character]?character=a"} as={"/lexikon/a"}>
          a
        </NextLink>{" "}
        -{" "}
        <NextLink href={"/dict/[character]?character=b"} as={"/lexikon/b"}>
          b
        </NextLink>{" "}
        -{" "}
        <NextLink href={"/dict/[character]?character=c"} as={"/lexikon/c"}>
          c
        </NextLink>
      </div>
      <div>
        Links not ssg:{" "}
        <NextLink href={"/dict/[character]?character=d"} as={"/lexikon/d"}>
          d
        </NextLink>{" "}
        -{" "}
        <NextLink href={"/dict/[character]?character=e"} as={"/lexikon/e"}>
          e
        </NextLink>{" "}
        -{" "}
        <NextLink href={"/dict/[character]?character=e"} as={"/lexikon/f"}>
          f
        </NextLink>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const characters = ["a", "b", "c"];

  return {
    paths: characters.map((character) => ({ params: { character } })),
    fallback: true,
  };
};

export const getStaticProps = async () => {
  return {
    props: {},
  };
};

export default Character;
