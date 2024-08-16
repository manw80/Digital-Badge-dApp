# Digital Badge dApp

## Overview

The **Digital Badge dApp** is a decentralized application designed to create, manage, and issue digital badges. These badges can be used to recognize achievements or milestones in a decentralized and trustless manner. The dApp leverages Cartesi Rollups to ensure secure and efficient state management on the blockchain.

## Features

- **Create Badge:** Users can create new digital badges with a unique ID, name, and description.
- **Issue Badge:** Users can issue existing badges to other users on the platform.
- **List Badges:** Retrieve a list of all badges that have been created.
- **Get Badge:** View the details of a specific badge by its unique ID.

## Prerequisites

To set up and run the Digital Badge dApp, ensure you have the following installed:

- **Node.js** (v14.x or later)
- **Yarn** or **npm**
- **Cartesi Rollups** environment set up

## Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/manw80/Digital-Badge-dApp
cd digital-badge
```

### Step 2: Install Dependencies

```bash
yarn install
```

Or if you prefer npm:

```bash
npm install
```

### Step 3: Build the Project

```bash
yarn build
```

Or with npm:

```bash
npm run build
```

## Starting the Cartesi DApp

### Step 1: Start the Cartesi Machine

Before running the dApp, ensure that the Cartesi machine is set up and running. Use the following commands:

```bash
cartesi-machine build
cartesi-machine run
```

### Step 2: Start the DApp

With the Cartesi machine running, you can now start the dApp:

```bash
ROLLUP_HTTP_SERVER_URL="http://127.0.0.1:5004" yarn start
```

Or with npm:

```bash
ROLLUP_HTTP_SERVER_URL="http://127.0.0.1:5004" npm start
```

## Interacting with the DApp

### Create a Badge

- **Endpoint:** `/create_badge`
- **Method:** `POST`
- **Payload:**
  ```json
  {
    "name": "Badge Name",
    "description": "Badge Description"
  }
  ```

### Issue a Badge

- **Endpoint:** `/issue_badge`
- **Method:** `POST`
- **Payload:**
  ```json
  {
    "badgeId": "badge-id",
    "recipient": "recipient-address"
  }
  ```

### List All Badges

- **Endpoint:** `/list_badges`
- **Method:** `GET`

### Get Badge Details

- **Endpoint:** `/badge/{badgeId}`
- **Method:** `GET`

## Cartesi Rollups API

The dApp extensively uses Cartesi Rollups for state management. Here’s how the Rollups API is integrated:

- **`/notice` Endpoint:** Used to post updates or new state changes to the blockchain.
- **`/report` Endpoint:** Used to report on the state inspections.
- **`/finish` Endpoint:** Completes the rollup requests, ensuring that the process moves forward.

### Handling Requests in `index.js`

The `index.js` file is the core of the dApp, handling both advance and inspect state requests using the Cartesi Rollups API:

- **Advance State:** Handles badge creation and issuance requests.
- **Inspect State:** Handles requests to view badge details or list all badges.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- **Cartesi Rollups:** For providing a robust and scalable framework for building decentralized applications.
- **ethers.js:** For facilitating seamless interactions with the Ethereum blockchain.

## Contributing

Feel free to contribute to the project by opening issues, submitting pull requests, or sharing ideas. All contributions are welcome!

## Support

If you encounter any issues or have any questions, please open an issue on the GitHub repository or contact the project maintainers.