---
title: "Connecting orders, inventory, and admin tools without more manual work"
description: "What to decide before integrating business systems, including data ownership, retries, and visibility when something fails."
date: "2026-10-23"
tags:
  - Integrations
  - Operations
---

An online store, an inventory tool, and an internal dashboard can each work well on their own. The difficulty appears when people have to move information between them throughout the day.

An integration should reduce that work without making the process harder to understand. A useful place to start is one event: an order is placed, an application is approved, or stock is updated.

## Map one event from start to finish

Consider a hypothetical retailer that takes orders online and fulfils them from two locations. Staff currently copy order details into a fulfilment sheet and adjust stock in another system.

Before discussing APIs, I would map the decisions in that process:

1. An order is received.
2. Payment status is checked.
3. A fulfilment location is assigned.
4. Stock is reserved according to the business rules.
5. Staff see the order in their working queue.
6. Fulfilment updates return to the customer-facing system.

Each step raises questions. Can an unpaid order reserve stock? What happens if the assigned location cannot fulfil it? Which system is allowed to mark the order as shipped?

The answers shape the integration more than the choice of dashboard layout.

## Give each piece of information an owner

Two systems should not both overwrite the same field without an agreed rule. That can turn a small discrepancy into a recurring synchronisation problem.

For example, the commerce platform might own payment status, the inventory system might own available stock, and the internal tool might own fulfilment assignments. The right arrangement depends on the existing systems and how the business operates.

Write down which direction each update travels. Include how records will be matched across systems, particularly when product names, customer details, or order references differ.

## Decide what happens when delivery fails

An integration needs a plan for interrupted work. A receiving service may be temporarily unavailable, an event may arrive again, or a record may fail validation.

Processing the same event twice should not accidentally create two fulfilment tasks. Failed updates should be visible and recoverable. If events can arrive out of order, the integration needs a way to avoid replacing a newer state with an older one.

The exact mechanisms depend on the systems involved. These behaviours should be part of the scope and acceptance checks, rather than discoveries after launch.

## Give staff enough visibility to resolve exceptions

A simple status view can be more useful than a large analytics dashboard. Staff should be able to see which records are waiting, which updates failed, and what action they can take.

Separate a business exception from a technical failure. “No location has sufficient stock” requires a different response from “The inventory service did not respond.” Avoid exposing credentials or unnecessary customer information in diagnostic messages.

Also agree who receives failure notifications and who owns the response. A log that nobody checks offers little operational reassurance.

## Release one connection before adding the next

Start with a bounded flow and test it with realistic records. Compare the connected systems, check duplicate events and failures, and confirm that staff can handle an exception. Where appropriate, run a reconciliation step to detect records that have drifted apart.

A successful first integration gives the team a dependable process to extend. Connecting everything at once makes it harder to locate the source of a mismatch.

[Tell me which systems your team works between](/contact). Include the information being copied, the direction it needs to move, and who uses it next. That is enough to start mapping a useful integration.
