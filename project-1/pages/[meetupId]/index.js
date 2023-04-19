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

export async function getStaticProps(context) {
  const { params } = context;
  const meetupId = params.meetupId;

  const client = await MongoClient.connect(
    "mongodb+srv://marovichn:<Password>@nikola.wojtt5i.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });

  client.close();

  return {
    props: {
      meetupData: { ...selectedMeetup, _id: selectedMeetup._id.toString() },
    },
  };
}

export default MeetupDetailsPage;
