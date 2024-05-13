import { getBands, getSchedule } from "../data/fetchFunctions"
import Section from "../components/Section";
import Link from "next/link"

async function Camp(params) {
  const {slug} = params
  const camp = await getSchedule();
  return (
    <>
    <Section>
    <h2>Camp page</h2>
    <Link prefetch={false} href={`./#`}>Check a band</Link>

    </Section>
    </>
  )
}

export default Camp