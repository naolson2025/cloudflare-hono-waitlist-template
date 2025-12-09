CREATE TABLE `subscribers` (
	`id` integer PRIMARY KEY NOT NULL,
	`email` text NOT NULL,
	`created_at` integer DEFAULT '"2025-12-09T12:54:50.253Z"' NOT NULL,
	`updated_at` integer DEFAULT '"2025-12-09T12:54:50.253Z"' NOT NULL,
	`traffic_source` text,
	`device` text,
	`email_verified` integer,
	`unsubscribed` integer,
	`confirmation_token` text,
	CONSTRAINT "email" CHECK("subscribers"."email" LIKE '%@%.%')
);
--> statement-breakpoint
CREATE UNIQUE INDEX `subscribers_email_unique` ON `subscribers` (`email`);