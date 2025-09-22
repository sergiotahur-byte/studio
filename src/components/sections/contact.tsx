'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { submitContactForm } from '@/app/actions';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Loader2, Send } from 'lucide-react';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-primary hover:bg-primary/90">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
      Enviar Mensaje
    </Button>
  );
}

export default function Contact() {
  const initialState = { message: '', errors: {} };
  const [state, dispatch] = useActionState(submitContactForm, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
      if (Object.keys(state.errors).length > 0) {
        // Don't show toast for validation errors on load
      } else {
        toast({
          title: 'Formulario Enviado',
          description: state.message,
        });
      }
    }
  }, [state, toast]);

  return (
    <section id="contacto" className="section-padding bg-white-a05">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-foreground font-headline">Contacte con Nosotros</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            ¿Tiene alguna pregunta? Envíenos un mensaje y un experto legal se pondrá en contacto con usted.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto bg-white-a05 border-white-a10 rounded-xl shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold font-headline">Formulario de Contacto</CardTitle>
            <CardDescription>Diligencie los campos para iniciar su consulta.</CardDescription>
          </CardHeader>
          <CardContent>
            <form action={dispatch} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre</Label>
                <Input id="name" name="name" placeholder="Su nombre completo" required className="bg-background border-white-a10" />
                {state.errors?.name && <p className="text-sm text-destructive">{state.errors.name[0]}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Correo Electrónico</Label>
                <Input id="email" name="email" type="email" placeholder="su@email.com" required className="bg-background border-white-a10" />
                {state.errors?.email && <p className="text-sm text-destructive">{state.errors.email[0]}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Mensaje</Label>
                <Textarea id="message" name="message" placeholder="Describa su situación o pregunta aquí..." required rows={5} className="bg-background border-white-a10" />
                {state.errors?.message && <p className="text-sm text-destructive">{state.errors.message[0]}</p>}
              </div>
              <SubmitButton />
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
