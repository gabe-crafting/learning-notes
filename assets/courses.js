/* Manifest for every course on the site.
   Add a course here and the navigation, sidebars and prev/next links follow.
   `path` is relative to the site root; nested courses are fine, e.g. "java-spring/react". */
window.COURSES = [
  {
    id: "java",
    path: "java",
    title: "Java",
    blurb: "The language from zero to job-ready: syntax, OOP, collections, streams, testing, build tools.",
    lessons: [
      { file: "01-introduction.html",    title: "What Java is and how it runs",      desc: "JDK, JVM, bytecode, your first program." },
      { file: "02-tooling.html",         title: "Tooling and project setup",         desc: "Installing the JDK, IDEs, compiling and running." },
      { file: "03-variables-types.html", title: "Variables and types",               desc: "Primitives, references, literals, casting, var." },
      { file: "04-operators.html",       title: "Operators and expressions",         desc: "Arithmetic, comparison, logic, precedence." },
      { file: "05-control-flow.html",    title: "Control flow",                      desc: "if, switch, loops, break and continue." },
      { file: "06-methods.html",         title: "Methods",                           desc: "Parameters, return values, overloading, recursion, scope." },
      { file: "07-arrays.html",          title: "Arrays",                            desc: "Declaring, iterating, multidimensional arrays, Arrays utilities." },
      { file: "08-strings.html",         title: "Strings and text",                  desc: "Immutability, common methods, StringBuilder, formatting." },
      { file: "09-oop-basics.html",      title: "Classes and objects",               desc: "Fields, constructors, encapsulation, static, this." },
      { file: "10-inheritance.html",     title: "Inheritance and polymorphism",      desc: "extends, super, overriding, Object methods." },
      { file: "11-interfaces.html",      title: "Interfaces and abstract classes",   desc: "Contracts, default methods, when to use which." },
      { file: "12-enums-records.html",   title: "Enums, records and sealed types",   desc: "Modelling fixed sets and immutable data." },
      { file: "13-exceptions.html",      title: "Exceptions",                        desc: "try/catch/finally, checked vs unchecked, custom exceptions." },
      { file: "14-collections.html",     title: "Collections framework",             desc: "List, Set, Map, Deque, iteration, equals and hashCode." },
      { file: "15-generics.html",        title: "Generics",                          desc: "Type parameters, bounds, wildcards, erasure." },
      { file: "16-lambdas-streams.html", title: "Lambdas and streams",               desc: "Functional interfaces, method references, the Stream API." },
      { file: "17-optional-dates.html",  title: "Optional, dates and utilities",     desc: "Null handling, java.time, Math, Random, regex." },
      { file: "18-io-files.html",        title: "Files, I/O and JSON",               desc: "Reading and writing files, try-with-resources, Jackson basics." },
      { file: "19-concurrency.html",     title: "Concurrency basics",                desc: "Threads, executors, shared state, CompletableFuture." },
      { file: "20-testing.html",         title: "Testing with JUnit 5",              desc: "Unit tests, assertions, Mockito, what to test." },
      { file: "21-build-tools.html",     title: "Maven, Gradle and packaging",       desc: "Dependencies, lifecycle, building a runnable jar." },
      { file: "22-good-practices.html",  title: "Junior developer practices",        desc: "Clean code, git workflow, debugging, code review, next steps." }
    ]
  },
  {
    id: "java-spring",
    path: "java-spring",
    title: "Java Spring",
    blurb: "Spring Boot for building real REST services: DI, web layer, JPA, security, testing, deployment.",
    lessons: [
      { file: "01-what-is-spring.html",   title: "What Spring is and why it exists", desc: "The container, inversion of control, the Spring ecosystem." },
      { file: "02-first-boot-app.html",   title: "Your first Spring Boot app",       desc: "start.spring.io, project layout, running it." },
      { file: "03-dependency-injection.html", title: "Dependency injection and beans", desc: "Components, constructor injection, scopes, lifecycle." },
      { file: "04-configuration.html",    title: "Configuration and profiles",       desc: "application.yml, @Value, @ConfigurationProperties, profiles." },
      { file: "05-rest-controllers.html", title: "REST controllers",                 desc: "Mappings, path and query params, request bodies, status codes." },
      { file: "06-dtos-mapping.html",     title: "DTOs, layers and mapping",         desc: "Controller, service and repository layers; why DTOs matter." },
      { file: "07-validation-errors.html", title: "Validation and error handling",   desc: "Bean Validation, @RestControllerAdvice, consistent error responses." },
      { file: "08-data-jpa.html",         title: "Persistence with Spring Data JPA", desc: "Entities, repositories, derived queries, paging." },
      { file: "09-relations-transactions.html", title: "Relations and transactions", desc: "OneToMany, fetch types, the N+1 problem, @Transactional." },
      { file: "10-database-migrations.html", title: "Databases and migrations",      desc: "Postgres, Docker Compose, Flyway, seed data." },
      { file: "11-security.html",         title: "Spring Security basics",           desc: "Filter chain, users, password hashing, JWT, method security." },
      { file: "12-testing.html",          title: "Testing Spring applications",      desc: "Unit tests, @WebMvcTest, @DataJpaTest, Testcontainers." },
      { file: "13-rest-clients.html",     title: "Calling other services",           desc: "RestClient, timeouts, retries, error handling." },
      { file: "14-observability.html",    title: "Logging, Actuator and metrics",    desc: "SLF4J, health checks, metrics, production habits." },
      { file: "15-packaging-deploy.html", title: "Packaging and deployment",         desc: "Fat jars, Dockerfile, environment config, CI basics." },
      { file: "16-capstone.html",         title: "Capstone project",                 desc: "Build a complete task-manager API step by step." }
    ]
  },
  {
    id: "ai-engineering",
    path: "ai-engineering",
    title: "AI Engineering",
    blurb: "Build products on top of existing models: LLM APIs, RAG, agents, evaluation and production concerns.",
    lessons: [
      { file: "01-what-is-ai-engineering.html", title: "What an AI engineer does",   desc: "The role, how it differs from ML engineering, and the stack." },
      { file: "02-python-for-ai.html",       title: "Python for AI engineers",       desc: "Fast track for developers: env, typing, async, Pydantic." },
      { file: "03-llm-fundamentals.html",    title: "How LLMs actually behave",      desc: "Tokens, context, sampling, hallucination, cost and latency." },
      { file: "04-first-api-calls.html",     title: "Calling an LLM API",            desc: "Messages, system prompts, streaming, retries, token counting." },
      { file: "05-prompt-engineering.html",  title: "Prompt engineering for production", desc: "Structure, examples, thinking, versioning prompts as code." },
      { file: "06-structured-outputs.html",  title: "Structured outputs",            desc: "JSON schemas, Pydantic validation, strict tools, repair loops." },
      { file: "07-tool-calling.html",        title: "Tool calling",                  desc: "Tool definitions, the call loop, parallel calls, tool design." },
      { file: "08-embeddings.html",          title: "Embeddings and similarity",     desc: "Vectors, cosine similarity, choosing an embedding model." },
      { file: "09-vector-stores.html",       title: "Vector stores",                 desc: "pgvector, Chroma, Qdrant, Pinecone; indexes and metadata filters." },
      { file: "10-ingestion-chunking.html",  title: "Ingestion and chunking",        desc: "Parsing documents, chunk strategies, metadata, re-indexing." },
      { file: "11-rag-pipeline.html",        title: "Building a RAG pipeline",       desc: "End-to-end retrieval-augmented generation with citations." },
      { file: "12-advanced-retrieval.html",  title: "Retrieval that actually works", desc: "Hybrid search, reranking, query rewriting, measuring recall." },
      { file: "13-agents-basics.html",       title: "Agents: the loop",              desc: "ReAct, tool loops, stopping conditions, when not to use agents." },
      { file: "14-agent-architectures.html", title: "Agent architectures and memory", desc: "Planning, subagents, memory, MCP, human-in-the-loop." },
      { file: "15-frameworks.html",          title: "Frameworks and orchestration",  desc: "LangChain, LlamaIndex, LangGraph — and when to use none of them." },
      { file: "16-evaluation.html",          title: "Evaluation and testing",        desc: "Eval sets, LLM-as-judge, regression tests, hill-climbing." },
      { file: "17-observability-cost.html",  title: "Observability, latency and cost", desc: "Tracing, caching, batching, routing, budgets." },
      { file: "18-security-guardrails.html", title: "Security and guardrails",       desc: "Prompt injection, PII, output validation, sandboxing tools." },
      { file: "19-open-models-finetuning.html", title: "Open models and fine-tuning", desc: "Hugging Face, local inference, and when fine-tuning beats RAG." },
      { file: "20-serving-deploying.html",   title: "Serving and deploying",         desc: "FastAPI, streaming to the browser, queues, Docker, rate limits." },
      { file: "21-projects-and-plan.html",   title: "Portfolio projects and a plan", desc: "Three projects worth showing, and an 8-week schedule." },
      { file: "22-interview-answers.html",   title: "Interview answers",             desc: "Rehearsed answers to the questions you must handle cold." }
    ]
  }
];
