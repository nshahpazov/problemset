#!/usr/bin/env perl
use strict;
use warnings;
use utf8;
use 5.012;

my $n = <> + 1;

sub uniq {
        my @s = sort split //, shift @_;
        my %counts = ();
        $counts{$_}++ for @s
        return @s == keys %counts;
}

$n++ until uniq $n;
print $n, '\n';