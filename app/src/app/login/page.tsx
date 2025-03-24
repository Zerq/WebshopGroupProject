import { NextRequest, NextResponse } from 'next/server'
// import { decrypt } from '@/app/lib/session'
import { cookies } from 'next/headers'
import { login } from "../actions";
import { useActionState } from 'react';

export default async function LoginForm() {
    const [state, loginAction] = useActionState(login, undefined);
    return (
        <div className="">Inloggningssida</div>
    )
}

