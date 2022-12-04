import React from 'react';

const Blog = () => {
    return (
        <div className='mt-8'>
            <section className="p-6 dark:bg-gray-800 dark:text-gray-100 rounded-lg">
                <div className="container mx-auto">
                    <h2 className="text-5xl font-bold text-center dark:text-gray-50">Here are some questions</h2>
                    <div className="grid gap-6 my-16 lg:grid-cols-3">
                        <div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-900">
                            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-violet-400 dark:text-gray-900">1</div>
                            <p className="text-2xl font-semibold">
                                <p>What are the difference ways to manage a state?</p>
                                <br />
                                <p>ANS: As your application grows, it helps to be more intentional about how your state is organized and how the data flows between your components. Redundant or duplicate state is a common source of bugs. In this chapter, you’ll learn how to structure your state well, how to keep your state update logic maintainable, and how to share state between distant components.</p>
                            </p>
                        </div>
                        <div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-900">
                            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-violet-400 dark:text-gray-900">2</div>
                            <p className="text-2xl font-semibold">
                                <p> How does prototypical inheritance work?</p>
                                <br />
                                <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object</p>
                            </p>
                        </div>
                        <div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-900">
                            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-violet-400 dark:text-gray-900">3</div>
                            <p className="text-2xl font-semibold">
                                <p>what is a unit text? why should we write unit text?</p>
                                <br />
                                <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
                            </p>
                        </div>
                        <div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-900">
                            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-violet-400 dark:text-gray-900">4</div>
                            <p className="text-2xl font-semibold">
                                <p>React vs Angular vs Vue?</p>
                                <br />
                                <p>Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.</p>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;