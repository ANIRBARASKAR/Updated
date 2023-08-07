// App.js
import React, { useState,useEffect } from 'react';
import {
    Tab,
    initTE,
  } from "tw-elements";
  

const App = () => {
    useEffect(() => {
        initTE({ Tab });
        }, []);
   
  return (
    <div className=" mx-auto p-8">
     <ul
  class="mb-5 flex list-none flex-row flex-wrap border-b-0 pl-0"
  role="tablist"
  data-te-nav-ref>
  <li role="presentation" class="flex-grow basis-0 text-center">
    <a
      href="#tabs-home02"
      class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
      data-te-toggle="pill"
      data-te-target="#tabs-home02"
      data-te-nav-active
      role="tab"
      aria-controls="tabs-home02"
      aria-selected="true"
      >Course1</a>
  </li>
  <li role="presentation" class="flex-grow basis-0 text-center">
    <a
      href="#tabs-profile02"
      class="focus:border-transparen my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
      data-te-toggle="pill"
      data-te-target="#tabs-profile02"
      role="tab"
      aria-controls="tabs-profile02"
      aria-selected="false"
      >Course2</a>
  </li>
  <li role="presentation" class="flex-grow basis-0 text-center">
    <a
      href="#tabs-messages02"
      class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
      data-te-toggle="pill"
      data-te-target="#tabs-messages02"
      role="tab"
      aria-controls="tabs-messages02"
      aria-selected="false"
      >Course3</a>
  </li>

</ul>

<div class="mb-6">
  <div
    class="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
    id="tabs-home02"
    role="tabpanel"
    aria-labelledby="tabs-home-tab02"
    data-te-tab-active>
    <div className="container mx-auto p-8 flex flex-wrap justify-center">
        <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
      <img
      src="https://source.unsplash.com/random/300x300/?1"
      alt=""
      className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
      />
      <div className="mt-6 mb-2">
      <span className="block text-xs font-medium tracking-uppercase dark:text-violet-400">Quisque</span>
      <h2 className="text-xl font-semibold tracking-wide">Nam maximus purus</h2>
      </div>
      <p className="dark:text-gray-100">
      Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed feugiat mi. Etiam ut lacinia dui.
      </p>
      </div>
      <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
      <img
      src="https://source.unsplash.com/random/300x300/?1"
      alt=""
      className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
      />
      <div className="mt-6 mb-2">
      <span className="block text-xs font-medium tracking-uppercase dark:text-violet-400">Quisque</span>
      <h2 className="text-xl font-semibold tracking-wide">Nam maximus purus</h2>
      </div>
      <p className="dark:text-gray-100">
      Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed feugiat mi. Etiam ut lacinia dui.
      </p>
      </div>
      <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
      <img
      src="https://source.unsplash.com/random/300x300/?1"
      alt=""
      className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
      />
      <div className="mt-6 mb-2">
      <span className="block text-xs font-medium tracking-uppercase dark:text-violet-400">Quisque</span>
      <h2 className="text-xl font-semibold tracking-wide">Nam maximus purus</h2>
      </div>
      <p className="dark:text-gray-100">
      Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed feugiat mi. Etiam ut lacinia dui.
      </p>
      </div>
      
      </div>
  </div>
  <div
    class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
    id="tabs-profile02"
    role="tabpanel"
    aria-labelledby="tabs-profile-tab02">
     <div className="container mx-auto p-8 flex flex-wrap justify-center">
        <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
      <img
      src="https://source.unsplash.com/random/300x300/?1"
      alt=""
      className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
      />
      <div className="mt-6 mb-2">
      <span className="block text-xs font-medium tracking-uppercase dark:text-violet-400">Quisque</span>
      <h2 className="text-xl font-semibold tracking-wide">Nam maximus purus</h2>
      </div>
      <p className="dark:text-gray-100">
      Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed feugiat mi. Etiam ut lacinia dui.
      </p>
      </div>
      <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
      <img
      src="https://source.unsplash.com/random/300x300/?1"
      alt=""
      className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
      />
      <div className="mt-6 mb-2">
      <span className="block text-xs font-medium tracking-uppercase dark:text-violet-400">Quisque</span>
      <h2 className="text-xl font-semibold tracking-wide">Nam maximus purus</h2>
      </div>
      <p className="dark:text-gray-100">
      Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed feugiat mi. Etiam ut lacinia dui.
      </p>
      </div>
      <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
      <img
      src="https://source.unsplash.com/random/300x300/?1"
      alt=""
      className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
      />
      <div className="mt-6 mb-2">
      <span className="block text-xs font-medium tracking-uppercase dark:text-violet-400">Quisque</span>
      <h2 className="text-xl font-semibold tracking-wide">Nam maximus purus</h2>
      </div>
      <p className="dark:text-gray-100">
      Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed feugiat mi. Etiam ut lacinia dui.
      </p>
      </div>
      
      </div>
  </div>
  <div
    class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
    id="tabs-messages02"
    role="tabpanel"
    aria-labelledby="tabs-profile-tab02">
       <div className="container mx-auto p-8 flex flex-wrap justify-center">
        <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
      <img
      src="https://source.unsplash.com/random/300x300/?1"
      alt=""
      className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
      />
      <div className="mt-6 mb-2">
      <span className="block text-xs font-medium tracking-uppercase dark:text-violet-400">Quisque</span>
      <h2 className="text-xl font-semibold tracking-wide">Nam maximus purus</h2>
      </div>
      <p className="dark:text-gray-100">
      Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed feugiat mi. Etiam ut lacinia dui.
      </p>
      </div>
      <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
      <img
      src="https://source.unsplash.com/random/300x300/?1"
      alt=""
      className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
      />
      <div className="mt-6 mb-2">
      <span className="block text-xs font-medium tracking-uppercase dark:text-violet-400">Quisque</span>
      <h2 className="text-xl font-semibold tracking-wide">Nam maximus purus</h2>
      </div>
      <p className="dark:text-gray-100">
      Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed feugiat mi. Etiam ut lacinia dui.
      </p>
      </div>
      <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
      <img
      src="https://source.unsplash.com/random/300x300/?1"
      alt=""
      className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
      />
      <div className="mt-6 mb-2">
      <span className="block text-xs font-medium tracking-uppercase dark:text-violet-400">Quisque</span>
      <h2 className="text-xl font-semibold tracking-wide">Nam maximus purus</h2>
      </div>
      <p className="dark:text-gray-100">
      Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed feugiat mi. Etiam ut lacinia dui.
      </p>
      </div>
      
      </div>
  </div>
  
</div>
</div>
  );
};

export default App;
