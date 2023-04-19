import { MongoClient, ObjectId } from "mongodb";

import MeetupDetail from "@/components/meetups/MeetupDetail";
const MeetupDetailsPage = (props) => {
  return (
    <MeetupDetail
      id={props.meetupData._id}
      title={props.meetupData.title}
      image={props.meetupData.image}
      address={props.meetupData.address}
      description={props.meetupData.description}
    ></MeetupDetail>
  );
};

export default MeetupDetailsPage;
