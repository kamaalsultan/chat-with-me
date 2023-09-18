import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

const exampleMessages = [
  {
    heading: 'Tell me about yourself',
    message: `Can you tell me about yourself in details?`
  },
  {
    heading: 'I want to hire you',
    message: 'I want to hire you. How can I reach out to you?'
  },
  {
    heading: 'Share me your resume',
    message: `Can you share me your resume link?`
  },
  {
    heading: 'What is your life philosophy',
    message: `Can you tell me about your life philosophy?`
  },
  {
    heading: 'What motivates you as a software engineer',
    message: `Can you tell me what motivates you as a software engineer?`
  }
]

export function EmptyScreen({ setInput }: Pick<UseChatHelpers, 'setInput'>) {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="rounded-lg border bg-background p-8">
        <h1 className="mb-2 text-lg font-semibold">
          Hi! This is Anthony Byrd.
        </h1>
        <p className="mb-2 leading-normal text-muted-foreground">
          This is an open source AI chatbot app built with &hearts; by <a href='https://github.com/byteballet'>byteballet</a>.
        </p>
        <p className="leading-normal text-muted-foreground">
          You can start a conversation here or ask following questions:
        </p>
        <div className="mt-4 flex flex-col items-start space-y-2">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              onClick={() => setInput(message.message)}
            >
              <IconArrowRight className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
