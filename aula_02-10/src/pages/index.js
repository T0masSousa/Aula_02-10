import Head from "next/head";
import Image from "next/image";
//import styles from "@/styles/Home.module.css";
import React from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <main>
          <Image
            src="https://nextjs.org/icons/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <ol>
            <li>
              Get started by editing <code>src/pages/index.js</code>.
            </li>
            <li>Save and see your changes instantly.</li>
            <p>Netlify test#1</p>
            <p>Netlify Test#2</p>
            <p>Netlify Test#3</p>
            <p>Netlify Test#4</p>
            <p>Netlify Test #5</p>
            <p>Netlify Test #6</p>
            <p>Netlify Test #7</p>
            <p>Netlify Test #8</p>
            <p>Netlify Test #9</p>
            <p>Netlify Test #10</p>
            <p>Netlify Test #11</p>
            <p>Netlify Test #12</p>
            <p>Netlify Test #13</p>
            <p>Netlify Test #14</p>
            <p>Netlify Test #15</p>
            <p>Netlify Test #16</p>
            <p>Netlify Test #17</p>
            <p>Netlify Test #18</p>
            <p>Netlify Test #19</p>
            <p>Netlify Test #20</p>
            <p>Netlify Test #21</p>
            <p>Netlify Test #22</p>
            <p>Netlify Test #23</p>
            <p>Netlify Test #24</p>
            <p>Netlify Test #25</p>
            <p>Netlify Test #26</p>
          </ol>

          <div>
            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="https://nextjs.org/icons/vercel.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
              />
              Deploy now
            </a>
            <a
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read our docs
            </a>
          </div>
        </main>
        <footer>
          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="https://nextjs.org/icons/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            Learn
          </a>
          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="https://nextjs.org/icons/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            Examples
          </a>
          <a
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="https://nextjs.org/icons/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Go to nextjs.org →
          </a>
        </footer>
      </div>
    </>
  );
}
