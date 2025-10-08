'use client';

import { useRef, useEffect } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { useToast } from '@/hooks/use-toast';
import { submitContactForm } from '@/app/form-actions';
import type { FormState } from '@/app/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Loader2, Send } from 'lucide-react';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
      {pending ? 'Enviando...' : 'Enviar Mensaje'}
    </Button>
  );
}

export default function Contact() {
  const initialState: FormState = { message: '', errors: null, status: 'idle' };
  const [state, dispatch] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === 'idle') return;

    if (state.status === 'success') {
      toast({
        title: 'Formulario Enviado',
        description: state.message,
      });
      formRef.current?.reset();
    } else if (state.status === 'error') {
       toast({
        variant: 'destructive',
        title: 'Error en el envío',
        description: state.message,
      });
    }
  }, [state, toast]);

  return (
    <section id="contacto" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-foreground font-headline">Contacte con Nosotros</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/90">
            ¿Tiene alguna pregunta? Envíenos un mensaje y un experto legal se pondrá en contacto con usted.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto bg-card rounded-xl shadow-lg border-white/10">
          <CardHeader>
            <CardTitle className="text-2xl font-bold font-headline">Formulario de Contacto</CardTitle>
            <CardDescription>Diligencie los campos para iniciar su consulta.</CardDescription>
          </CardHeader>
          <CardContent>
            <form ref={formRef} action={dispatch} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre</Label>
                <Input id="name" name="name" placeholder="Su nombre completo" required aria-describedby={state.errors?.name ? 'name-error' : undefined} />
                {state.errors?.name && <p id="name-error" className="text-sm text-destructive">{state.errors.name[0]}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Correo Electrónico</Label>
                <Input id="email" name="email" type="email" placeholder="su@email.com" required aria-describedby={state.errors?.email ? 'email-error' : undefined} />
                {state.errors?.email && <p id="email-error" className="text-sm text-destructive">{state.errors.email[0]}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Mensaje</Label>
                <Textarea id="message" name="message" placeholder="Describa su situación o pregunta aquí..." required rows={5} aria-describedby={state.errors?.message ? 'message-error' : undefined} />
                {state.errors?.message && <p id="message-error" className="text-sm text-destructive">{state.errors.message[0]}</p>}
              </div>
              <SubmitButton />
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
