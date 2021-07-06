---
title: Concepts
permalink: /schema/fundamentals/concepts
category: Data Schema
menuOrder: 1
subCategory: Fundamentals
---

Cube.js borrows a lot of terminology from data science, and this document is
intended for both newcomers and regular users to refresh their understanding.

// Use the e-com examples again

## Cubes

A cube represents a table of data in Cube.js. Cubes are typically declared in
separate files with one cube per file. Within each cube are definitions of
measures and dimensions.

// mention cubes generally map 1-1 with tables
  // show example of orders cube doing a simple select
// they can be more complicated; the `sql` parameter is flexible enough to handle any SQL query
  // maybe mention originalSql here? not sure

## Measures

A measure is an aggregation over a certain column in your database table.

// use example of orders, line items

## Dimensions

// use example of customer name maybe?

## Pre-Aggregations

// explain the "pre"


## OLAP

[self-dimensions]: #dimensions
[self-measures]: #measures
[wiki-olap]: https://en.wikipedia.org/wiki/Online_analytical_processing
