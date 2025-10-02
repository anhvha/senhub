import * as Tooltip from "@radix-ui/react-tooltip"
import { HelpCircle } from "lucide-react"

type Props = {
  tooltip: string
}

export function QuestionTooltip({ tooltip }: Props) {
  return (
    <Tooltip.Provider delayDuration={200}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <span className="inline-flex cursor-pointer ml-1 align-middle text-gray-400 hover:text-gray-600">
            <HelpCircle size={14} />
          </span>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            side="top"
            sideOffset={5}
            className="z-50 max-w-xs rounded-md bg-gray-900 px-2 py-1 text-xs text-white shadow-lg animate-in fade-in-0 zoom-in-95"
          >
            {tooltip}
            <Tooltip.Arrow className="fill-gray-900" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}
