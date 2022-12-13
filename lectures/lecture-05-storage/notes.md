# Network Protocols

Lecture Source: https://www.algoexpert.io/systems/fundamentals


## Statistics

- Video duration: 00h17m40s
- Total duration: 00h0m00s (video + notes + structure);
- Ratio: 


## Notes

- Database:
  - Two primary purposes:
    - Store (write, set, record) data;
    - Retrieve (read, get, query) data;
  - Common gap in knowledge:
    - Thinking that database is a magical opaque box that "lives in the ether";
  - Almost always is just a server;
    - You can take your machine and make it a primary database;
      - Write files;
      - Read files;
      - It might not be the best decision, but it is possible;
  - Persistence:
    - Cannot be assumed as granted;
    - Disk:
      - Ex.: file system;
      - Reading and writing is slower;
      - Data will persist even if the server goes down (if the computer is turned down, or crashes);
    - Memory:
      - Ex.: array or hash table declared in your server code;
      - Reading and writing is much faster; 
      - Data will not persist if server goes down;
  - There are hundreds of databases available;
    - Google alone offers 8 storage products;
    - Different databases will offer different attributes to your system;
  - Data distribution:
    - Central storage;
      - If server goes down, the whole system goes down;
      - Latency for users in different parts of the world will vary greatly;
    - Distributed storage;
      - Multiple machines;
      - Complex management;
      - Consistency issues;
        - Stale x Fresh data;

## Key Terms

<ul>
  <li>
    <h4>Databases</h4>
    <div>
      <div>
        <p>
          Databases are programs that either use disk or memory to do 2 core
          things:
          <b>record</b> data and <b>query</b> data. In general, they are
          themselves servers that are long lived and interact with the rest of
          your application through network calls, with protocols on top of TCP
          or even HTTP.
        </p>
        <p>
          Some databases only keep records in memory, and the users of such
          databases are aware of the fact that those records may be lost forever
          if the machine or process dies.
        </p>
        <p>
          For the most part though, databases need persistence of those records,
          and thus cannot use memory. This means that you have to write your
          data to disk. Anything written to disk will remain through power loss
          or network partitions, so that’s what is used to keep permanent
          records.
        </p>
        <p>
          Since machines die often in a large scale system, special disk
          partitions or volumes are used by the database processes, and those
          volumes can get recovered even if the machine were to go down
          permanently.
        </p>
      </div>
    </div>
  </li>
  <li>
    <h4>Disk</h4>
    <div>
      <div>
        <p>
          Usually refers to either <b>HDD (hard-disk drive)</b> or
          <b>SSD (solid-state drive)</b>. Data written to disk will persist
          through power failures and general machine crashes. Disk is also
          referred to as <b>non-volatile storage</b>.
        </p>
        <p>
          SSD is far faster than HDD (see latencies of accessing data from SSD
          and HDD) but also far more expensive from a financial point of view.
          Because of that, HDD will typically be used for data that's rarely
          accessed or updated, but that's stored for a long time, and SSD will
          be used for data that's frequently accessed and updated.
        </p>
      </div>
    </div>
  </li>
  <li>
    <h4>Memory</h4>
    <div>
      <div>
        <p>
          Short for <b>Random Access Memory (RAM)</b>. Data stored in memory
          will be <u>lost</u> when the process that has written that data dies.
        </p>
      </div>
    </div>
  </li>
  <li>
    <h4>Persistent Storage</h4>
    <div>
      <div>
        <p>
          Usually refers to disk, but in general it is any form of storage that
          persists if the process in charge of managing it dies.
        </p>
      </div>
    </div>
  </li>
</ul>
