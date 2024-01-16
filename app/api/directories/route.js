import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    // Construct the path to the JSON file
    const filePath = path.join(process.cwd(), 'db', 'directories.json');

    // Read the JSON file
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    // Return the parsed data
    return new NextResponse(JSON.stringify({ data }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (e) {
    console.error(e);
    // Return an error response
    return new NextResponse(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
