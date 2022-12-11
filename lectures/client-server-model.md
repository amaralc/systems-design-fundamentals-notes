# Client Server Model

Lecture Source: https://www.algoexpert.io/systems/fundamentals


## Statistics

- Video duration: 00h14m30s
- Total duration: 01h15m00s (video + notes + structure);
- Ratio: 5.2/1


## Notes

- User types url in the browser;
- Browser makes [DNS](https://en.wikipedia.org/wiki/Domain_Name_System) query to find out what is the IP address for that [domain name](https://en.wikipedia.org/wiki/Domain_name);
  - Question: What is a DNS query?
    - Answer: A special request that goes to a predetermined set of servers, asking for the the IP address for a given domain name;
    - Summary: Client -> DNS (Domain Name System) -> Returns IP address;
  - Question: What is an IP address?
    - Unique identifier for a machine;
  - Exercise: make DNS query to algoexpert.io in a local terminal:
    - (terminal) Do a DNS query and display the answer in the terminal: `dig algoexpert.io`;
    - (terminal) Response:
      ```
      ; Response:

      ; <<>> DiG 9.16.1-Ubuntu <<>> algoexpert.io
      ;; global options: +cmd
      ;; Got answer:
      ;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 36987
      ;; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 1

      ;; OPT PSEUDOSECTION:
      ; EDNS: version: 0, flags:; udp: 65494
      ;; QUESTION SECTION:
      ;algoexpert.io.			IN	A

      ;; ANSWER SECTION:
      algoexpert.io.		3600	IN	A	35.202.194.70

      ;; Query time: 79 msec
      ;; SERVER: 127.0.0.53#53(127.0.0.53)
      ;; WHEN: dom dez 11 07:24:05 -03 2022
      ;; MSG SIZE  rcvd: 58
      ```
- With the [IP address](https://en.wikipedia.org/wiki/IP_address), the browser makes an [HTTP](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol) request to the server;
  - In other words, it sends a bunch of bytes (or characters) that get packed in what is called [packets](https://en.wikipedia.org/wiki/Network_packet);
  - The request also contains the IP address of your computer (source address of the request);
- Servers listen to clients on specific [ports](https://en.wikipedia.org/wiki/Port_(computer_networking));
  - Question: What is a server?
    - Answer: Machines that are waiting to receive requests from other machines;
    - Answer: Any machine that has a distinct IP adress has 16000 ports that programs on the machine can listen to;
  - When you communicate to a machine, you must specify the port you want to communicate on;
    - Analogy: 
      - Machine -> Building;
      - IP Addresse -> Street Address;
      - Port -> Mail addresse, including appartment number;
  - Most clients know what port they should use depending on the protocol they are using to communicate;
    - HTTP Protocol -> Port 80;
    - HTTPS Protocol -> Port 443;
    - Exercise:
      - (terminal:1) On terminal 1, listen to port 8081 in: `nc -l 8081`;
      - (terminal:2) Connect as client on the same port in other terminal: `nc 127.0.0.1 8081`;
      - (terminal:2) Type "Hello terminal 1";
      - (terminal:1) Verify that terminal 1 received the information;
- When the server gets a request it knows to what IP address to responde to: the source address;

## Key Terms

<ul>
  <li>
    <h4>Client</h4>
    <div>
      <div>
        <p>A machine or process that requests data or service from a server.</p>
        <p>
          Note that a single machine or piece of software can be both a client
          and a server at the same time. For instance, a single machine could
          act as a server for end users and as a client for a database.
        </p>
      </div>
    </div>
  </li>
  <li>
    <h4>Server</h4>
    <div>
      <div>
        <p>
          A machine or process that provides data or service for a client,
          usually by listening for incoming network calls.
        </p>
        <p>
          Note that a single machine or piece of software can be both a client
          and a server at the same time. For instance, a single machine could
          act as a server for end users and as a client for a database.
        </p>
      </div>
    </div>
  </li>
  <li>
    <h4>Client—Server Model</h4>
    <div>
      <div>
        <p>
          The paradigm by which modern systems are designed, which consists of
          clients requesting data or service from servers and servers providing
          data or service to clients.
        </p>
      </div>
    </div>
  </li>
  <li>
    <h4>IP Address</h4>
    <div>
      <div>
        <p>
          An address given to each machine connected to the public internet.
          IPv4 addresses consist of four numbers separated by dots:
          <b>a.b.c.d</b> where all four numbers are between 0 and 255. Special
          values include:
        </p>
        <ul>
          <li>
            <b>127.0.0.1</b>: Your own local machine. Also referred to as
            <b>localhost</b>.
          </li>
          <li>
            <b>192.168.x.y</b>: Your private network. For instance, your machine
            and all machines on your private wifi network will usually have the
            <b>192.168</b> prefix.
          </li>
        </ul>
      </div>
    </div>
  </li>
  <li>
    <h4>Port</h4>
    <div>
      <div>
        <p>
          In order for multiple programs to listen for new network connections
          on the same machine without colliding, they pick a <b>port</b> to
          listen on. A port is an integer between 0 and 65,535 (2<sup>16</sup>
          ports total).
        </p>
        <p>
          Typically, ports 0-1023 are reserved for <i>system ports</i> (also
          called <i>well-known</i> ports) and shouldn't be used by user-level
          processes. Certain ports have pre-defined uses, and although you
          usually won't be required to have them memorized, they can sometimes
          come in handy. Below are some examples:
        </p>
        <ul>
          <li>22: Secure Shell</li>
          <li>53: DNS lookup</li>
          <li>80: HTTP</li>
          <li>443: HTTPS</li>
        </ul>
      </div>
    </div>
  </li>
  <li>
    <h4>DNS</h4>
    <div>
      <div>
        <p>
          Short for Domain Name System, it describes the entities and protocols
          involved in the translation from domain names to IP Addresses.
          Typically, machines make a DNS query to a well known entity which is
          responsible for returning the IP address (or multiple ones) of the
          requested domain name in the response.
        </p>
      </div>
    </div>
  </li>
</ul>
