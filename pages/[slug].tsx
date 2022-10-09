import { readdirSync } from "fs";
import matter from "gray-matter";
import { GetStaticProps, NextPage } from "next";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";

interface SlugData {
  title: string;
  date: string;
  category: string;
}

interface SlugProps {
  post: string;
  data: SlugData;
}

const MarkdownViewer = dynamic(() => import("@uiw/react-markdown-preview"), {
  ssr: false,
});

const NoticeDetail: NextPage<SlugProps> = ({ post, data }) => {
  const navigator = useRouter();
  return (
    <div
      className="m-5 w-full space-y-2 flex justify-center flex-col items-center"
      data-color-mode="light"
    >
      <div className="flex relative items-center w-1/2 justify-center">
        <div
          onClick={() => navigator.back()}
          className="absolute left-0 cursor-pointer flex items-center space-x-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
            />
          </svg>
          <span>go back</span>
        </div>
        <h1 className="py-5 text-center text-3xl font-bold">{data.title}</h1>
      </div>
      <div className="w-2/4 rounded-md p-3">
        <MarkdownViewer source={post} />
      </div>
    </div>
  );
};

export function getStaticPaths() {
  const files = readdirSync("./__posts").map((file) => {
    const [name, extension] = file.split(".");
    return { params: { slug: name } };
  });
  return {
    paths: files,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { content, data } = matter.read(`./__posts/${ctx.params?.slug}.md`);
  return { props: { data, post: content } };
};

export default NoticeDetail;
