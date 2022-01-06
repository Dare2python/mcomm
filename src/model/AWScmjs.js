var client = require("@aws-sdk/client-ec2");

// import { EC2Client, DescribeRouteTablesCommand } from "@aws-sdk/client-ec2";

//https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ec2/classes/describeroutetablescommand.html

// const client = new EC2Client(config);
// const command = new DescribeRouteTablesCommand(input);

function describeRoutes(){
  console.log("DescribeRoutes");
// // async/await.
// try {
//     console.log("inside AWS");
//     // console.log("client", client);
//     // console.log("command", command);
//     // const data = await client.send(command);
//     // process data.
//   } catch (error) {
//         // error handling.
//         console.log("Error", error);
//   } finally {
//     // finally.
//   }

}

// function test(){
//   console.log("inside AWS");
// }

module.exports = describeRoutes ;