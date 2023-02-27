import { MongoClient } from "mongodb";

// /api/new-meetup

const handler = async (req, res) => {
	if (req.method === "POST") {
		const data = req.body;

		const client = await MongoClient.connect(
			"mongodb+srv://rianzenki:9Rw9Un6P8XXCGyhP@meetup.0yyfsaz.mongodb.net/meetups?retryWrites=true&w=majority"
		);
		const db = client.db();

		const meetupsCollection = db.collection("meetups");

		const result = await meetupsCollection.insertOne(data);
		console.log(result);

		client.close();

		return res.status(201).json({ message: "Meetup inserted" });
	}
};

export default handler;
