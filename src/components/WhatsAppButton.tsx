import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const predefinedMessages = [
    "Olá! Gostaria de saber mais sobre os planos.",
    "Sou médico e preciso de ajuda com meu imposto de renda.",
    "Gostaria de abrir um CNPJ para minha clínica.",
    "Preciso falar com um contador."
];

const WhatsAppButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [customMessage, setCustomMessage] = useState("");

    const handleSendMessage = (message: string) => {
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/5585987411585?text=${encodedMessage}`, "_blank");
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
            {isOpen && (
                <div className="bg-white rounded-2xl shadow-xl border border-border p-4 w-[300px] mb-2 animate-fade-up origin-bottom-right">
                    <div className="flex justify-between items-center mb-4 border-b pb-2">
                        <h3 className="font-semibold text-foreground">Fale Conosco</h3>
                        <button onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground">
                            <X className="h-4 w-4" />
                        </button>
                    </div>

                    <div className="space-y-2 mb-4">
                        <p className="text-xs text-muted-foreground uppercase font-semibold">Mensagens rápidas:</p>
                        {predefinedMessages.map((msg, idx) => (
                            <button
                                key={idx}
                                onClick={() => handleSendMessage(msg)}
                                className="w-full text-left text-sm p-2 rounded-lg bg-muted/50 hover:bg-primary/10 hover:text-primary transition-colors duration-200 truncate"
                            >
                                {msg}
                            </button>
                        ))}
                    </div>

                    <div className="flex gap-2">
                        <input
                            type="text"
                            placeholder="Digite sua mensagem..."
                            className="flex-1 text-sm border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-primary/50"
                            value={customMessage}
                            onChange={(e) => setCustomMessage(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(customMessage)}
                        />
                        <Button
                            size="icon"
                            className="h-9 w-9 bg-green-500 hover:bg-green-600 text-white"
                            onClick={() => handleSendMessage(customMessage)}
                        >
                            <Send className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            )}

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center"
            >
                {isOpen ? <X className="h-7 w-7" /> : <MessageCircle className="h-7 w-7" />}
            </button>
        </div>
    );
};

export default WhatsAppButton;