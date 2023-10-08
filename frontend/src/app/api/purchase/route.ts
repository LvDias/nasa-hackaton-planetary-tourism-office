import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const formData = await request.formData()
  const name = formData.get('name')
  const cpf = formData.get('cpf')
  const phone = formData.get('phone')

  console.log({
    name,
    cpf,
    phone,
  })

  return NextResponse.redirect('http://localhost:3000/purchase/thanks', 301)
}
