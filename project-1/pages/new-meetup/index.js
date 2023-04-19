import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment } from "react";

function NewMeetUpPage() {
  const router = useRouter();

  const addMeetupHandler = async (data) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    router.push("/");
  };

  return (
    <Fragment>
      <Head>
        <title>Add your meetups</title>
        <meta
          name="description"
          content="Add your meetups in this demo react app!!"
        ></meta>
      </Head>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler}></NewMeetupForm>
    </Fragment>
  );
}
export default NewMeetUpPage;
