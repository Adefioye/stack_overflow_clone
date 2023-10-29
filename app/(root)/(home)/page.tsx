// import QuestionCard from "@/components/cards/QuestionCard";
import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilters from "@/components/home/HomeFilters";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
// import NoResult from "@/components/shared/NoResult";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
// import {
//   getQuestions,
//   getRecommendedQuestions,
// } from "@/lib/actions/question.action";
// import { SearchParamsProps } from "@/types";
import Link from "next/link";

export default function Home() {
  const questions = [
    {
      _id: "6368f9d6-04fa-443e-8c75-469834170b56",
      title: "How do I deploy a React application to production?",
      tags: [
        {
          _id: "6368f9d6-04fa-443e-8c75-469834170b57",
          name: "react",
        },
        {
          _id: "6368f9d6-04fa-443e-8c75-469834170b58",
          name: "deployment",
        },
      ],
      author: {
        _id: "6368f9d6-04fa-443e-8c75-469834170b59",
        name: "Jane Doe",
        picture: "https://example.com/avatar2.png",
      },
      upvotes: 20,
      views: 200,
      answers: [],
      createdAt: new Date("2023-10-30T01:00:00.000Z"),
      clerkId: "6368f9d6-04fa-443e-8c75-469834170b60",
    },
    {
      _id: "6368f9d6-04fa-443e-8c75-469834170b61",
      title:
        "What is the difference between a class component and a functional component in React?",
      tags: [
        {
          _id: "6368f9d6-04fa-443e-8c75-469834170b62",
          name: "react",
        },
        {
          _id: "6368f9d6-04fa-443e-8c75-469834170b63",
          name: "components",
        },
      ],
      author: {
        _id: "6368f9d6-04fa-443e-8c75-469834170b64",
        name: "Peter Smith",
        picture: "https://example.com/avatar3.png",
      },
      upvotes: 30,
      views: 300,
      answers: [],
      createdAt: new Date("2023-10-30T02:00:00.000Z"),
      clerkId: null,
    },
    {
      _id: "6368f9d6-04fa-443e-8c75-469834170b65",
      title: "How do I use hooks in React?",
      tags: [
        {
          _id: "6368f9d6-04fa-443e-8c75-469834170b66",
          name: "react",
        },
        {
          _id: "6368f9d6-04fa-443e-8c75-469834170b67",
          name: "hooks",
        },
      ],
      author: {
        _id: "6368f9d6-04fa-443e-8c75-469834170b68",
        name: "Mary Johnson",
        picture: "https://example.com/avatar4.png",
      },
      upvotes: 30,
      views: 300,
      answers: [],
      createdAt: new Date("2023-10-30T02:00:00.000Z"),
      clerkId: null,
    },
  ];

  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>

        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />

        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>

      <HomeFilters />

      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There’s no question to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
}
