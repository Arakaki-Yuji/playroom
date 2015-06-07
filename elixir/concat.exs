defmodule Concat do
  def join(a, b, seq \\ " ") do
    a <> seq <> b
  end
end

IO.puts Concat.join("Hello", "world")
IO.puts Concat.join("Hello", "world", "_")
