import React from "react";
import usePageTitle from "../../hooks/usePageTitle";

const Blog = () => {
  usePageTitle("Blogs");
  return (
    <div>
      <div className="lg:w-9/12 border-2 shadow-xl mx-auto p-10 my-10">
        <h1 className="text-3xl mb-5 font-semibold">
          (1) Difference between SQL and NoSQL ?
        </h1>
        <div className="ml-8">
          <ul className="  list-decimal  text-gray-800 dark:text-gray-400 font-bold">
            <li className="mb-2">
              SQL databases are relational, NoSQL databases are non-relational.
            </li>
            <li className="mb-2">
              SQL databases use structured query language and have a predefined
              schema. NoSQL databases have dynamic schemas for unstructured
              data.
            </li>
            <li className="mb-5">
              SQL databases are vertically scalable, while NoSQL databases are
              horizontally scalable.
            </li>
            <li className="mb-2">
              SQL databases are table-based, while NoSQL databases are document,
              key-value, graph, or wide-column stores.
            </li>
            <li>
              SQL databases are better for multi-row transactions, while NoSQL
              is better for unstructured data like documents or JSON.
            </li>
          </ul>
        </div>
      </div>
      <div className="lg:w-9/12 border-2 shadow-xl mx-auto p-10 my-10">
        <h1 className="text-3xl mb-5 font-semibold">
          (2)What is JWT, and how does it work? ?
        </h1>
        <div className="ml-8">
          <p className="font-semibold mb-5">
            JWT, or JSON Web Token, is an open standard used to share security
            information between two parties — a client and a server. Each JWT
            contains encoded JSON objects, including a set of claims. JWTs are
            signed using a cryptographic algorithm to ensure that the claims
            cannot be altered after the token is issued.
          </p>
          <p className="font-semibold">
            JWTs differ from other web tokens in that they contain a set of
            claims. Claims are used to transmit information between two parties.
            What these claims are depends on the use case at hand. For example,
            a claim may assert who issued the token, how long it is valid for,
            or what permissions the client has been granted.
          </p>
        </div>
      </div>

      <div className="lg:w-9/12 border-2 shadow-xl mx-auto p-10 my-10">
        <h1 className="text-3xl mb-5 font-semibold">
          (3) What is the difference between javascript and NodeJS ?
        </h1>
        <div className="ml-8">
          <p className="font-semibold mb-8">
            <span className="text-xl font-bold">JavaScript:</span>
            <br />
            Javascript is a Scripting language. It is mostly abbreviated as JS.
            It can be said that Javascript is the updated version of the ECMA
            script. Javascript is a high-level programming language that uses
            the concept of Oops but it is based on prototype inheritance.
          </p>
          <p className="font-semibold">
            <span className="text-xl font-bold">NodeJS:</span>
            <br />
            NodeJS is a cross-platform and opensource Javascript runtime
            environment that allows the javascript to be run on the server-side.
            Nodejs allows Javascript code to run outside the browser. Nodejs
            comes with a lot of modules and mostly used in web development.
          </p>
        </div>
      </div>
      <div className="lg:w-9/12 border-2 shadow-xl mx-auto p-10 my-10">
        <h1 className="text-3xl mb-5 font-semibold">
          (4) How does NodeJS handle multiple requests at the same time? ?
        </h1>
        <div className="ml-8">
          <p className="font-semibold mb-8">
            NodeJS receives multiple client requests and places them into
            EventQueue. NodeJS is built with the concept of event-driven
            architecture. NodeJS has its own EventLoop which is an infinite loop
            that receives requests and processes them. EventLoop is the listener
            for the EventQueue. <br />
            If NodeJS can process the request without I/O blocking then the
            event loop would itself process the request and sends the response
            back to the client by itself. But, it is possible to process
            multiple requests parallelly using the NodeJS cluster module or
            worker_threads module.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
