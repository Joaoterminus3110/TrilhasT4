
abstract class VoteSystem {
  protected votes: Record<string, number> = {};

  abstract voteFor(candidate: string): void;
  abstract getResults(): object;
}


class Election extends VoteSystem {
  voteFor(candidate: string): void {
    if (this.votes[candidate]) {
      this.votes[candidate]++;
    } else {
      this.votes[candidate] = 1;
    }
  }

  getResults(): Record<string, number> {
    return this.votes;
  }
}


class Poll extends VoteSystem {
  voteFor(candidate: string): void {
    if (this.votes[candidate]) {
      this.votes[candidate]++;
    } else {
      this.votes[candidate] = 1;
    }
  }

  getResults(): { candidate: string; votes: number }[] {
    const entries = Object.entries(this.votes); 

    
    entries.sort((a, b) => b[1] - a[1]);

    
    return entries.map(([candidate, votes]) => ({
      candidate,
      votes,
    }));
  }
}


