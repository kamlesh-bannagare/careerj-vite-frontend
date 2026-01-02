"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { 
  Send, 
  Paperclip, 
  Smile, 
  MoreVertical,
  Phone,
  Video,
  X,
  CheckCheck,
  Clock
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface Mentor {
  id: number
  name: string
  title: string
  company: string
  avatar: string
  verified?: boolean
}

interface Message {
  id: number
  content: string
  sender: "user" | "mentor"
  timestamp: Date
  status: "sent" | "delivered" | "read"
}

interface MentorChatProps {
  mentor: Mentor | null
  isOpen: boolean
  onClose: () => void
}

const mockResponses = [
  "That's a great question! Let me think about that for a moment.",
  "Based on my experience at {company}, I would suggest focusing on building a strong foundation first.",
  "I've helped many engineers with similar challenges. The key is to be consistent with your practice.",
  "That's exactly the right approach! Keep pushing forward.",
  "I'd recommend checking out some resources on system design. Would you like me to share some links?",
  "In my experience, the best way to prepare for interviews is to practice with real problems.",
  "Have you considered working on some open-source projects? It's a great way to build your portfolio.",
  "Let's schedule a call to discuss this in more detail. What time works for you?",
]

export default function MentorChat({ mentor, isOpen, onClose }: MentorChatProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [isOnline] = useState(true)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && mentor) {
      // Add initial greeting from mentor
      setMessages([
        {
          id: 1,
          content: `Hi! I'm ${mentor.name}. Thanks for reaching out! How can I help you with your career today?`,
          sender: "mentor",
          timestamp: new Date(),
          status: "read"
        }
      ])
    }
  }, [isOpen, mentor])

  const simulateMentorResponse = () => {
    setIsTyping(true)
    
    setTimeout(() => {
      const randomResponse = mockResponses[Math.floor(Math.random() * mockResponses.length)]
        .replace("{company}", mentor?.company || "my company")
      
      setMessages(prev => [...prev, {
        id: prev.length + 1,
        content: randomResponse,
        sender: "mentor",
        timestamp: new Date(),
        status: "read"
      }])
      setIsTyping(false)
    }, 1500 + Math.random() * 2000)
  }

  const handleSend = () => {
    if (!inputValue.trim()) return

    const newMessage: Message = {
      id: messages.length + 1,
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
      status: "sent"
    }

    setMessages(prev => [...prev, newMessage])
    setInputValue("")

    // Update message status
    setTimeout(() => {
      setMessages(prev => 
        prev.map(msg => 
          msg.id === newMessage.id ? { ...msg, status: "delivered" as const } : msg
        )
      )
    }, 500)

    setTimeout(() => {
      setMessages(prev => 
        prev.map(msg => 
          msg.id === newMessage.id ? { ...msg, status: "read" as const } : msg
        )
      )
    }, 1000)

    // Simulate mentor response
    simulateMentorResponse()
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", { 
      hour: "numeric", 
      minute: "2-digit",
      hour12: true 
    })
  }

  if (!mentor) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg p-0 h-[600px] flex flex-col overflow-hidden">
        {/* Chat Header */}
        <DialogHeader className="p-4 border-b flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={mentor.avatar} />
                  <AvatarFallback>{mentor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                {isOnline && (
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-background rounded-full" />
                )}
              </div>
              <div>
                <DialogTitle className="text-base font-semibold flex items-center gap-2">
                  {mentor.name}
                  {mentor.verified && (
                    <Badge variant="secondary" className="text-xs px-1.5 py-0">
                      Verified
                    </Badge>
                  )}
                </DialogTitle>
                <p className="text-xs text-muted-foreground">
                  {isOnline ? "Online" : "Last seen recently"}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Phone className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Video className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </DialogHeader>

        {/* Messages Area */}
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            <AnimatePresence mode="popLayout">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`flex items-end gap-2 max-w-[80%] ${message.sender === "user" ? "flex-row-reverse" : ""}`}>
                    {message.sender === "mentor" && (
                      <Avatar className="w-6 h-6 flex-shrink-0">
                        <AvatarImage src={mentor.avatar} />
                        <AvatarFallback className="text-xs">{mentor.name[0]}</AvatarFallback>
                      </Avatar>
                    )}
                    <div
                      className={`rounded-2xl px-4 py-2.5 ${
                        message.sender === "user"
                          ? "bg-primary text-primary-foreground rounded-br-md"
                          : "bg-muted rounded-bl-md"
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.content}</p>
                      <div className={`flex items-center gap-1 mt-1 ${message.sender === "user" ? "justify-end" : ""}`}>
                        <span className={`text-[10px] ${message.sender === "user" ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                          {formatTime(message.timestamp)}
                        </span>
                        {message.sender === "user" && (
                          <span className="text-primary-foreground/70">
                            {message.status === "read" ? (
                              <CheckCheck className="w-3 h-3" />
                            ) : message.status === "delivered" ? (
                              <CheckCheck className="w-3 h-3 opacity-50" />
                            ) : (
                              <Clock className="w-3 h-3" />
                            )}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Typing Indicator */}
            <AnimatePresence>
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="flex items-end gap-2"
                >
                  <Avatar className="w-6 h-6">
                    <AvatarImage src={mentor.avatar} />
                    <AvatarFallback className="text-xs">{mentor.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="bg-muted rounded-2xl rounded-bl-md px-4 py-3">
                    <div className="flex gap-1">
                      <motion.span
                        className="w-2 h-2 bg-muted-foreground/50 rounded-full"
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                      />
                      <motion.span
                        className="w-2 h-2 bg-muted-foreground/50 rounded-full"
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                      />
                      <motion.span
                        className="w-2 h-2 bg-muted-foreground/50 rounded-full"
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>

        {/* Input Area */}
        <div className="p-4 border-t flex-shrink-0">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-9 w-9 flex-shrink-0">
              <Paperclip className="h-5 w-5 text-muted-foreground" />
            </Button>
            <div className="relative flex-1">
              <Input
                ref={inputRef}
                placeholder="Type a message..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                className="pr-10 h-10 rounded-full bg-muted/50"
              />
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-7 w-7 absolute right-1.5 top-1.5"
              >
                <Smile className="h-5 w-5 text-muted-foreground" />
              </Button>
            </div>
            <Button 
              size="icon" 
              className="h-10 w-10 rounded-full flex-shrink-0"
              onClick={handleSend}
              disabled={!inputValue.trim()}
            >
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
