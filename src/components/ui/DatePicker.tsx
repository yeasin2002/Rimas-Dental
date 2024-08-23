"use client";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/utils";

interface DatePickerProps extends React.ComponentPropsWithoutRef<"button"> {
	date: Date;
	setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
	defaultPlaceholder: string;
}

export function DatePicker({ date, setDate, className, defaultPlaceholder, ...rest }: DatePickerProps) {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					{...rest}
					variant={"outline"}
					className={cn(
						"max-w-[280px] justify-start text-left font-normal",
						className,
						!date && "text-muted-foreground",
					)}
				>
					<CalendarIcon className="mr-2 h-4 w-4" />
					{date ? format(date, "PPP") : <span>{defaultPlaceholder}</span>}
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-auto p-0">
				<Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
			</PopoverContent>
		</Popover>
	);
}
