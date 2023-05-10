
const nasaResponse= {"copyright":"Howard Trottier","date":"2023-04-12","explanation":"The large stellar association cataloged as NGC 206 is nestled within the dusty arms of the neighboring Andromeda galaxy along with the galaxy's pinkish star-forming regions. Also known as M31, the spiral galaxy is a mere 2.5 million light-years away. NGC 206 is found right of center in this sharp and detailed close-up of the southwestern extent of Andromeda's disk. The bright, blue stars of NGC 206 indicate its youth. In fact, its youngest massive stars are less than 10 million years old. Much larger than the open or galactic clusters of young stars in the disk of our Milky Way galaxy, NGC 206 spans about 4,000 light-years. That's comparable in size to the giant stellar nurseries NGC 604 in nearby spiral M33 and the Tarantula Nebula in the Large Magellanic Cloud.","hdurl":"https://apod.nasa.gov/apod/image/2304/Trottier_M31SW_APOD_Re.jpg","media_type":"image","service_version":"v1","title":"NGC 206 and the Star Clouds of Andromeda","url":"https://apod.nasa.gov/apod/image/2304/Trottier_M31SW_APOD_Re1024.jpg"}
import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header.jsx';

it('Checks picture of the day for date', () => {
  render(<Header nasaResponse={nasaResponse}/>);
  expect(screen.getByText(nasaResponse.date)).toBeInTheDocument();
});

it('Checks picture of the day for explanation', () => {
  render(<Header nasaResponse={nasaResponse}/>);
  expect(screen.getByText(nasaResponse.explanation)).toBeInTheDocument();
});

it('Checks picture of the day for the title', () => {
  render(<Header nasaResponse={nasaResponse}/>);
  expect(screen.getByText(nasaResponse.title)).toBeInTheDocument();
});

it('Checks picture of the day for picture url', () => {
  render(<Header nasaResponse={nasaResponse}/>);
  expect(screen.getByAltText(nasaResponse.url)).toBeInTheDocument();
});

