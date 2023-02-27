import Head from "next/head";
import { useRouter } from "next/router";

import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
	const router = useRouter();

	const addMeetupHandler = async (enteredMeetup) => {
		const response = await fetch("/api/new-meetup", {
			method: "POST",
			body: JSON.stringify(enteredMeetup),
			headers: {
				"Content-Type": "application/json",
			},
		});

		const data = await response.json();

		console.log(data);
		router.push("/");
	};

	return (
		<>
			<Head>
				<title>Add a New Meetups</title>
				<meta
					name="description"
					content="Add your own meetups"
				/>
			</Head>
			<NewMeetupForm onAddMeetup={addMeetupHandler} />
		</>
	);
};

export default NewMeetupPage;
