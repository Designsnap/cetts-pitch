import { redirect } from 'next/navigation'

export default function Home() {
  redirect('/pages/1?total=13')
}
